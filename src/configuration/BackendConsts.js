import { gql } from "apollo-boost";

export const GQLUrl = "https://dxp-gql-app.herokuapp.com/v1/graphql";

export const BlockchainUrl = `http://dev.omertex.com:17864`;

export const TemporaryBankWallet = {
  address: "dxpert1ka08uzst48ralnwjc6yzyfq8xp0jk26e3459yp",
  privateKey: "nNNIcCl4GFQqzMrOq/a8Dc5gDCpFKdyPVVsT+i18Rwk=",
  publicKey: "A076Yuv6mjKtqMV/Wykfy6D3aMxMYmlsrnhNN6vaeXyo",
};

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
    resumes(
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
      address
      public_data
      birth_date
      sex
    }
  }
`;

export const GQLGetRole = gql`
  query($address: String!) {
    roles_by_pk(address: $address) {
      address
      role
    }
  }
`;

export const GQLSetRole = gql`
  mutation InsertRole($address: String!, $role: smallint) {
    insert_roles(objects: { address: $address, role: $role }) {
      returning {
        address
        role
      }
    }
  }
`;
