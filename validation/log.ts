import { z } from "zod";

import { zSpecies } from "./species";
import { zId, zNullableNumber, zNullableString } from "./common";

const zLog = z.object({
  id: zId,
  diameter: zNullableNumber,
  length: zNullableNumber,
  grade: zNullableString,
  species: zSpecies.nullable(),
});

const zNewLog = zLog.omit({
  id: true,
});

type Log = z.infer<typeof zLog>;
type NewLog = z.infer<typeof zNewLog>;

export { zLog, zNewLog, type Log, type NewLog };
