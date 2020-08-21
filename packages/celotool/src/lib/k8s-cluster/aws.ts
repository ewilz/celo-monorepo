import { execCmdWithExitOnFailure } from 'src/lib/cmd-utils'
import { BaseClusterConfig, BaseClusterManager } from './base'

/**
 * Basic info for an EKS cluster
 */
export interface AWSClusterConfig extends BaseClusterConfig {
  clusterRegion: string,
  resourceGroupTag: string
}

export class AWSClusterManager extends BaseClusterManager {
  async switchToSubscription() {
    // TODO: not yet supported
  }

  async getAndSwitchToClusterContext() {
    await execCmdWithExitOnFailure(
      `aws eks --region ${this.clusterConfig.clusterRegion} update-kubeconfig --name ${this.clusterConfig.clusterName} --alias ${this.clusterConfig.clusterName}`
    )
  }

  get clusterConfig(): AWSClusterConfig {
    return this._clusterConfig as AWSClusterConfig
  }
}