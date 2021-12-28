import * as React from "react";
import { ScheduleAcc } from "features/recommand";
import { MoveToPayBt } from "..";
import { TripLayout } from "features/common";

export function RecommandReservation() {
  return (
    <TripLayout>
      <ScheduleAcc />
      <MoveToPayBt />
    </TripLayout>
  );
}
