/*
 * Copyright © 2015 Lukas Rosenthaler, Benjamin Geer, Ivan Subotic,
 * Tobias Schweizer, André Kilchenmann, and André Fatton.
 *
 * This file is part of Knora.
 *
 * Knora is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Knora is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with Knora.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.knora.webapi.util

import java.util.UUID

import org.knora.webapi.util.standoff._
import org.scalatest.{Matchers, WordSpec}
import org.xmlunit.builder.{DiffBuilder, Input}
import org.xmlunit.diff.Diff

/**
  * Tests [[StandoffUtil]].
  */
class StandoffUtilSpec extends WordSpec with Matchers {

    val standoffUtil = new StandoffUtil

    "The standoff utility" should {

        "convert a simple XML document to text with standoff, then back to an equivalent XML document" in {

            // Convert the XML document to text with standoff.
            val textWithStandoff: TextWithStandoff = standoffUtil.xml2TextWithStandoff(StandoffUtilSpec.simpleXmlDoc)

            // Convert the text with standoff back to XML. The resulting XML is intentionally different in insignificant
            // ways (e.g. order of attributes).
            val backToXml = standoffUtil.textWithStandoff2Xml(
                textWithStandoff = textWithStandoff,
                includeUuids = false
            )

            // Compare the original XML with the regenerated XML, ignoring insignificant differences.
            val xmlDiff: Diff = DiffBuilder.compare(Input.fromString(StandoffUtilSpec.simpleXmlDoc)).withTest(Input.fromString(backToXml)).build()
            xmlDiff.hasDifferences should be(false)

        }

        "calculate the diffs in a workflow with two versions of a diplomatic transcription and two versions of an editorial text" in {

            // The diplomatic transcription has a structural tag (paragraph), an abbreviation ('d' for 'den'), a
            // strikethrough, and a repeated word (which could be the author's mistake or the transcriber's mistake).
            val diplomaticTranscription1 =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<paragraph uuid="c0b31981-d2d2-4bde-be58-a47baf0693b5">Ich habe d Bus <strike uuid="a94a7f35-a5f8-4cad-a1ed-fe0e435333fd">heute </strike>genommen, weil ich ich verspätet war.</paragraph>
                """.stripMargin

            // Convert the markup in the transcription to standoff, and check that it's correct.

            val diplo1TextWithStandoff: TextWithStandoff = standoffUtil.xml2TextWithStandoff(diplomaticTranscription1)

            diplo1TextWithStandoff should be(TextWithStandoff(
                standoff = Vector(
                    StandoffTag(
                        parentIndex = None,
                        index = 0,
                        startPosition = 0,
                        endPosition = 58,
                        tagName = "paragraph",
                        uuid = UUID.fromString("c0b31981-d2d2-4bde-be58-a47baf0693b5")
                    ),
                    TextRange(
                        parentIndex = Some(0),
                        index = 1,
                        endPosition = 15,
                        startPosition = 0
                    ),
                    StandoffTag(
                        parentIndex = Some(0),
                        index = 2,
                        startPosition = 15,
                        endPosition = 21,
                        tagName = "strike",
                        uuid = UUID.fromString("a94a7f35-a5f8-4cad-a1ed-fe0e435333fd")
                    ),
                    TextRange(
                        parentIndex = Some(2),
                        index = 3,
                        startPosition = 15,
                        endPosition = 21
                    ),
                    TextRange(
                        parentIndex = Some(0),
                        index = 4,
                        startPosition = 21,
                        endPosition = 58
                    )
                ),
                text = "Ich habe d Bus heute genommen, weil ich ich verspätet war."
            ))

            val diplo1TextBackTtoXml: String = standoffUtil.textWithStandoff2Xml(
                textWithStandoff = diplo1TextWithStandoff,
                includeUuids = true
            )

            val diplo1XmlDiff: Diff = DiffBuilder.compare(Input.fromString(diplomaticTranscription1)).withTest(Input.fromString(diplo1TextBackTtoXml)).build()
            diplo1XmlDiff.hasDifferences should be(false)

            // The editor keeps the <paragraph> tag, expands the abbreviation, deletes the text marked with strikethrough,
            // and corrects the repeated word.
            val editorialText1 =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<paragraph uuid="c0b31981-d2d2-4bde-be58-a47baf0693b5">Ich habe den Bus genommen, weil ich verspätet war.</paragraph>
                """.stripMargin

            val edito1TextWithStandoff: TextWithStandoff = standoffUtil.xml2TextWithStandoff(editorialText1)

            // Find the differences between the version 1 of the transcription and version 1 of the editorial text,
            // so they can be linked together.

            val editorialStandoffDiffs1: Seq[StandoffDiff] = standoffUtil.makeStandoffDiffs(
                baseText = diplo1TextWithStandoff.text,
                derivedText = edito1TextWithStandoff.text
            )

            // Check that the editor's diffs are correct, by converting them to XML (which makes the test more readable).

            val expectedEditorialDiffs1AsXml =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<diffs>Ich habe d<ins>en</ins> Bus <del>heute </del>genommen, weil ich <del>ich </del>verspätet war.</diffs>
                """.stripMargin

            val editorialDiffs1AsXml: String = standoffUtil.standoffDiffs2Xml(
                baseText = diplo1TextWithStandoff.text,
                derivedText = edito1TextWithStandoff.text,
                standoffDiffs = editorialStandoffDiffs1
            )

            val xmlDiff1: Diff = DiffBuilder.compare(Input.fromString(expectedEditorialDiffs1AsXml)).withTest(Input.fromString(editorialDiffs1AsXml)).build()
            xmlDiff1.hasDifferences should be(false)

            // Now suppose the transcription has been updated. The new transcription changes 'Bus' to 'Bahn', corrects
            // the repeated word, which turns out to have been a transcription error, and adds a <blue> tag for ink
            // colour.
            val diplomaticTranscription2 =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<paragraph uuid="c0b31981-d2d2-4bde-be58-a47baf0693b5">Ich habe d Bahn <strike uuid="a94a7f35-a5f8-4cad-a1ed-fe0e435333fd">heute </strike>genommen, weil ich <blue uuid="28e228c3-6fbb-48b3-8ed4-390e4fe23952">verspätet</blue> war.</paragraph>
                """.stripMargin

            // The editor now rebases the editorial text against the revised transcription, by making new diffs.
            // Find the differences between the version 2 of the transcription and version 1 of the editorial text.

            val diplo2TextWithStandoff: TextWithStandoff = standoffUtil.xml2TextWithStandoff(diplomaticTranscription2)

            val editorialStandoffDiffs2: Seq[StandoffDiff] = standoffUtil.makeStandoffDiffs(
                baseText = diplo2TextWithStandoff.text,
                derivedText = edito1TextWithStandoff.text
            )

            // Check that the editor's diffs are correct. Since the transcriber and editor now agree that 'ich' should
            // not be repeated, there should be no diff for that. However, the change from 'Bus' to 'Bahn' should show
            // up as a deletion and an insertion.

            val expectedEditorialDiffs2AsXml =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<diffs>Ich habe d<del> Bahn heute</del><ins>en Bus</ins> genommen, weil ich verspätet war.</diffs>
                """.stripMargin

            val editorialDiffs2AsXml: String = standoffUtil.standoffDiffs2Xml(
                baseText = diplo2TextWithStandoff.text,
                derivedText = edito1TextWithStandoff.text,
                standoffDiffs = editorialStandoffDiffs2
            )

            val xmlDiff2: Diff = DiffBuilder.compare(Input.fromString(expectedEditorialDiffs2AsXml)).withTest(Input.fromString(editorialDiffs2AsXml)).build()
            xmlDiff2.hasDifferences should be(false)

            // Also find out which standoff tags have changed in the new version of the transcription.

            val (addedTagUuids, removedTagUuids) = standoffUtil.findChangedStandoffTags(diplo1TextWithStandoff.standoff, diplo2TextWithStandoff.standoff)

            addedTagUuids should be(Set(UUID.fromString("28e228c3-6fbb-48b3-8ed4-390e4fe23952"))) // Just the <blue> tag was added.
            removedTagUuids should be(Set()) // No tags were removed.

            // The editor now corrects the editorial text to take into account the change from 'Bus' to 'Bahn'. This
            // means that the abbreviation 'd' in the transcription now has to be expanded as 'die' rather than 'der'.
            // The editor also takes the <blue> tag.

            val editorialText2 =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<paragraph uuid="c0b31981-d2d2-4bde-be58-a47baf0693b5">Ich habe die Bahn genommen, weil ich <blue uuid="28e228c3-6fbb-48b3-8ed4-390e4fe23952">verspätet</blue> war.</paragraph>
                """.stripMargin

            val edito2TextWithStandoff: TextWithStandoff = standoffUtil.xml2TextWithStandoff(editorialText2)

            // We now rebase the revised editorial text against the revised transcription, so they can be linked
            // together.

            val editorialStandoffDiffs3: Seq[StandoffDiff] = standoffUtil.makeStandoffDiffs(
                baseText = diplo2TextWithStandoff.text,
                derivedText = edito2TextWithStandoff.text
            )

            // Check that the editor's diffs are correct.

            val expectedEditorialDiffs3AsXml =
                """<?xml version="1.0" encoding="UTF-8"?>
                  |<diffs>Ich habe d<ins>ie</ins> Bahn <del>heute </del>genommen, weil ich verspätet war.</diffs>
                """.stripMargin

            val editorialDiffs3AsXml: String = standoffUtil.standoffDiffs2Xml(
                baseText = diplo2TextWithStandoff.text,
                derivedText = edito2TextWithStandoff.text,
                standoffDiffs = editorialStandoffDiffs3
            )

            val xmlDiff3: Diff = DiffBuilder.compare(Input.fromString(expectedEditorialDiffs3AsXml)).withTest(Input.fromString(editorialDiffs3AsXml)).build()
            xmlDiff3.hasDifferences should be(false)

        }

    }
}

object StandoffUtilSpec {

    val simpleXmlDoc =
        """<?xml version="1.0" encoding="UTF-8"?>
          |<article>
          |    <title>Special Relativity</title>
          |
          |    <paragraph>
          |        In physics, special relativity is the generally accepted and experimentally well confirmed physical
          |        theory regarding the relationship between space and time. In <person id="6789">Albert Einstein</person>'s
          |        original pedagogical treatment, it is based on two postulates:
          |
          |        <orderedList>
          |            <listItem>that the laws of physics are invariant (i.e. identical) in all inertial systems
          |                (non-accelerating frames of reference).</listItem>
          |            <listItem>that the speed of light in a vacuum is the same for all observers, regardless of the
          |                motion of the light source.</listItem>
          |        </orderedList>
          |    </paragraph>
          |
          |    <paragraph>
          |        <person id="6789">Einstein</person> originally proposed it in
          |        <date value="1905" calendar="gregorian">1905</date> in <citation
          |        id="einstein_1905a"/>.
          |
          |        Here is a sentence with a sequence of empty tags: <foo /><bar /><baz />.
          |    </paragraph>
          |</article>""".stripMargin

}