import { InitialArgv } from 'src/cmds/deploy/initial'
import { ContextArgv, switchToContextCluster } from 'src/lib/context-utils'
import { addOracleMiddleware } from 'src/lib/oracle'
import { installFullNodeChart } from 'src/lib/oracle-fullnode'

export const command = 'oracle-fullnode'

export const describe = 'deploy the oracle full-node(s) on an AKS cluster'

type OracleFullNodeInitialArgv = InitialArgv & ContextArgv

export const builder = addOracleMiddleware

export const handler = async (argv: OracleFullNodeInitialArgv) => {
  await switchToContextCluster(argv.celoEnv, argv.context)
  await installFullNodeChart(argv.celoEnv, argv.context)
}
