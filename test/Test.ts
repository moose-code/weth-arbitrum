import assert from "assert";
import { 
  TestHelpers,
  AeWETH_Approval
} from "generated";
const { MockDb, AeWETH } = TestHelpers;

describe("AeWETH contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AeWETH contract Approval event
  const event = AeWETH.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AeWETH_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AeWETH.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAeWETHApproval = mockDbUpdated.entities.AeWETH_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAeWETHApproval: AeWETH_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAeWETHApproval, expectedAeWETHApproval, "Actual AeWETHApproval should be the same as the expectedAeWETHApproval");
  });
});
