import { gql } from "apollo-boost";

export const GQLUrl = "https://dxp-gql-app.herokuapp.com/v1/graphql";

export const SearchQuery = gql`
  query bySkills(
    $public_data: jsonb
    $sex: bpchar
    $country: String
    $age_from: date
    $age_to: date
    $exp_from: smallint
    $exp_to: smallint
    $offset: Int
    $limit: Int
  ) {
    resume(
      where: {
        sex: { _eq: $sex }
        country: { _eq: $country }
        public_data: { _contains: $public_data }
        _and: [
          { birth_date: { _gt: $age_to } }
          { birth_date: { _lt: $age_from } }
          { total_experience: { _gt: $exp_from } }
          { total_experience: { _lt: $exp_to } }
        ]
      }
      offset: $offset
      limit: $limit
    ) {
      public_data
      birth_date
      sex
    }
  }
`;
