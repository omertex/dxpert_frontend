import { gql } from "apollo-boost";

export const Url = "https://dxp-gql-app.herokuapp.com/v1/graphql";

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

export const GetRole = gql`
  query($address: String!) {
    roles_by_pk(address: $address) {
      address
      role
    }
  }
`;

export const SetRole = gql`
  mutation InsertRole($address: String!, $role: smallint) {
    insert_roles(objects: { address: $address, role: $role }) {
      returning {
        address
        role
      }
    }
  }
`;

export const GetRecruiter = gql`
  query GetRecrutier($address: String!) {
    recruiters_by_pk(address: $address) {
      about
      address
      city
      country
      email
      organisation
      website
    }
  }
`;

export const SetRecruiter = gql`
  mutation InsertRecruiter(
    $address: String!
    $about: String
    $city: String!
    $country: String!
    $email: String!
    $organisation: String!
    $website: String!
  ) {
    insert_recruiters(
      objects: {
        about: $about
        address: $address
        city: $city
        country: $country
        email: $email
        organisation: $organisation
        website: $website
      }
    ) {
      returning {
        about
        address
        city
        country
        email
        organisation
        website
      }
    }
  }
`;

export const UpdateRecruiter = gql`
  mutation UpdateRecrutier(
    $address: String!
    $about: String
    $city: String!
    $country: String!
    $email: String!
    $organisation: String!
    $website: String!
  ) {
    update_recruiters(
      where: { address: { _eq: $address } }
      _set: {
        about: $about
        city: $city
        country: $country
        email: $email
        organisation: $organisation
        website: $website
      }
    ) {
      returning {
        about
        address
        city
        country
        email
        organisation
        website
      }
    }
  }
`;

export const GetResumesRequest = gql`
  query GetResumesRequest($src: String, $dest: String, $status: Int) {
    request_resumes(src: $src, dest: $dest, status: $status) {
      status
      src
      dest
      pub_key
      updated_at
      data
    }
  }
`;

export const SetTransaction = (type) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case "RequestResume":
      return gql`
        query SetTransaction($input: RequestResumeTransaction!) {
          request_resume(input: $input) {
            error
            statusCode
            data
          }
        }
      `;
    case "MsgSend":
      return gql`
        query SetTransaction($input: MsgSendTransaction!) {
          msg_send(input: $input) {
            error
            statusCode
            data
          }
        }
      `;
    case "UploadResume":
      return gql`
        query SetTransaction($input: UploadResumeTransaction!) {
          upload_resume(input: $input) {
            error
            statusCode
            data
          }
        }
      `;
    case "Response":
      return gql`
        query SetTransaction($input: ResponseTransaction!) {
          response(input: $input) {
            error
            statusCode
            data
          }
        }
      `;
  }
};
