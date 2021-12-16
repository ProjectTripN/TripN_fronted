import * as React from "react";
import { ScheduleAcc } from "features/recommand";
import { MoveToPayBt } from "..";
import { TripLayout } from "features/common";

export function RecommandReservation() {
  return (
    <TripLayout>
      <ScheduleAcc />
      <h1>지도 들어가야행</h1>
      <MoveToPayBt />
    </TripLayout>
  );
}
