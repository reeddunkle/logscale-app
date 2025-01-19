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

export { zLog };
