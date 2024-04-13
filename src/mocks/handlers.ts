import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";
import { transformData } from "@/utils/useQuery";

export const handlers = [
  http.get("http://localhost:3000/api/policyholders", () => {
    const result = {
      name: faker.person.fullName(),
      code: faker.string.uuid(),
      registration_date: faker.date.anytime(),
      introducer_code: faker.number.int(),
      l: [
        {
          name: faker.person.fullName(),
          code: faker.string.uuid(),
          registration_date: faker.date.anytime(),
          introducer_code: faker.number.int(),
        },
      ],
      r: [
        {
          name: faker.person.fullName(),
          code: faker.string.uuid(),
          registration_date: faker.date.anytime(),
          introducer_code: faker.number.int(),
        },
      ],
    };
    const data = transformData(result);
    return HttpResponse.json( data );
  }),
];
