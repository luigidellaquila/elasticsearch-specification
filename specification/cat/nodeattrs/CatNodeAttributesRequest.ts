/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { CatRequestBase } from '@cat/_types/CatBase'
import { Duration } from '@_types/Time'

/**
 * Get node attribute information.
 * Get information about custom node attributes.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 * @rest_spec_name cat.nodeattrs
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-nodeattrs
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  query_parameters: {
    /**
     * If `true`, the request computes the list of selected nodes from the
     * local cluster state. If `false` the list of selected nodes are computed
     * from the cluster state of the master node. In both cases the coordinating
     * node will send requests for further information to each selected node.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
