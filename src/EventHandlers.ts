/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AeWETH,
  AeWETH_Approval,
  AeWETH_Transfer,
} from "generated";

AeWETH.Approval.handler(async ({ event, context }) => {
  const entity: AeWETH_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.AeWETH_Approval.set(entity);
});

AeWETH.Transfer.handler(async ({ event, context }) => {
  const entity: AeWETH_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    data: event.params.data,
  };

  context.AeWETH_Transfer.set(entity);
});
