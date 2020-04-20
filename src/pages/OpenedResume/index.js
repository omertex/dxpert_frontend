import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import { connect } from "react-redux";
import DefaultAvatar from "../../assets/images/default_avatar.svg";
import { MailLink } from "../../shared-components/Buttons";
import { withRouter } from "react-router-dom";
import {
  OpenedContainer,
  OpenedInfo,
  OpenedAboutMe,
  OpenedTags,
  OpenedExperiences,
  OpenedEducation,
} from "./Containers";
import PageLoading from "../../shared-components/PageLoading";
import { getOpenedResume } from "../../store/sagas/requests";
import { decryptByPrivateKey } from "../../configuration/helpers";

const OpenedResume = ({ avatar, name, address, privateKey, history }) => {
  const [resume, setResume] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { data } = history.location.state;
    if (data.tx_id) {
      setIsLoading(true);
      getOpenedResume(data.tx_id).then((response) => {
        if (response.response) {
          setResume({
            name: decryptByPrivateKey(privateKey, response.data.name) || "",
            about: decryptByPrivateKey(privateKey, response.data.about) || "",
            email: decryptByPrivateKey(privateKey, response.data.email) || "",
            experience: JSON.parse(response.data.experience) || [],
            birth_date: new Date(data.birth_date).toLocaleDateString(),
            sex: data.sex === "m" ? "Male" : "Female",
            city: data.city,
            country: data.country,
            ...data.public_data,
          });
        }
        setIsLoading(false);
      });
    }
  }, []);

  const renderResume = () => {
    return (
      <>
        <Styled.ProfileInfo>
          <Styled.Avatar src={DefaultAvatar} alt="Your avatar" />
          <h2>{resume.name || ""}</h2>
          <MailLink href={`mailto:${resume.email || ""}`} />
        </Styled.ProfileInfo>

        <OpenedContainer name="Contact details">
          <OpenedInfo title="Country" description={resume.country || ""} />
          <OpenedInfo title="City" description={resume.city || ""} />
          <OpenedInfo title="Gender" description={resume.sex || ""} />
          <OpenedInfo
            title="Date of birth"
            description={resume.birth_date || ""}
          />
          <OpenedInfo title="E-mail" description={resume.email || ""} />
        </OpenedContainer>

        <OpenedContainer name="About me">
          <OpenedAboutMe description={resume.about || ""} />
        </OpenedContainer>

        <OpenedContainer name="Skills">
          <OpenedTags description={resume.skills || []} />
        </OpenedContainer>

        <OpenedContainer name="Languages">
          <OpenedTags description={resume.languages || []} />
        </OpenedContainer>

        <OpenedContainer name="Work Experience">
          {(resume.experience || []).map((data) => (
            <OpenedExperiences key={data.company + data.position}>
              <OpenedInfo
                title="Start of work"
                description={decryptByPrivateKey(privateKey, data.from || "")}
              />
              <OpenedInfo
                title="End"
                description={decryptByPrivateKey(privateKey, data.to || "")}
              />
              <OpenedInfo
                title="Organization"
                description={decryptByPrivateKey(
                  privateKey,
                  data.company || ""
                )}
              />
              <OpenedInfo
                title="Position"
                description={decryptByPrivateKey(
                  privateKey,
                  data.position || ""
                )}
              />
            </OpenedExperiences>
          ))}
        </OpenedContainer>

        <OpenedContainer name="Education">
          {(resume.education || []).map((data) => (
            <OpenedInfo
              title={data.graduation_year}
              key={data.graduation_year + data.institution}
            >
              <OpenedEducation>
                <h6>{data.institution}</h6>
                <p>{data.department}</p>
                <p>{data.level}</p>
                <p>{data.specialization}</p>
              </OpenedEducation>
            </OpenedInfo>
          ))}
        </OpenedContainer>
      </>
    );
  };

  return (
    <Styled.Container>
      <ShortInfo avatar={avatar} name={name} address={address} />
      {isLoading ? <PageLoading /> : renderResume()}
    </Styled.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    avatar: state.applicant.details.avatar,
    name: state.applicant.details.name,
    privateKey: state.auth.privateKey,
  };
};

export default connect(mapStateToProps)(withRouter(OpenedResume));
