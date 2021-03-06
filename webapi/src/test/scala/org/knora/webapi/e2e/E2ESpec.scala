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

package org.knora.webapi.e2e

import org.knora.webapi.Settings
import org.knora.webapi.util.CacheUtil
import org.scalatest.{BeforeAndAfterAll, Matchers, Suite, WordSpecLike}
import spray.routing.HttpService
import spray.testkit.ScalatestRouteTest

/**
  * Created by subotic on 08.12.15.
  */
class E2ESpec extends Suite with ScalatestRouteTest with WordSpecLike with Matchers with BeforeAndAfterAll with HttpService {

    def actorRefFactory = system

    val settings = Settings(system)
    val logger = akka.event.Logging(system, this.getClass())
    val log = logger

    override def beforeAll {
        CacheUtil.createCaches(settings.caches)
    }

    override def afterAll {
        CacheUtil.removeAllCaches()
    }

}
