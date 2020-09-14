import { DestroyArgv } from 'src/cmds/deploy/destroy'
import { ContextArgv, switchToContextCluster } from 'src/lib/context-utils'
import { addOracleMiddleware } from 'src/lib/oracle'
import { removeFullNodeChart } from 'src/lib/oracle-fullnode'

export const command = 'oracle-fullnode'

export const describe = 'destroy the oracle full-node(s) on an AKS cluster'

type OracleFullNodeDestroyArgv = DestroyArgv & ContextArgv

export const builder = addOracleMiddleware

export const handler = async (argv: OracleFullNodeDestroyArgv) => {
  await switchToContextCluster(argv.celoEnv, argv.context)
  await removeFullNodeChart(argv.celoEnv, argv.context)
}
