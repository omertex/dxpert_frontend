import React from "react";
import * as Styled from "./styled";
import ShortInfo from "../../shared-components/ShortInfo";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultAvatar from "../../assets/images/default_avatar.svg";
import { MailLink } from "../../shared-components/Buttons";
import {
  OpenedContainer,
  OpenedInfo,
  OpenedAboutMe,
  OpenedTags,
  OpenedEducation,
} from "./Containers";

const OpenedResume = ({ avatar, name, address}) => {
  const { id } = useParams();
  console.log(id);

  return (
    <Styled.Container>
      <ShortInfo avatar={avatar} name={name} address={address} />
      <Styled.ProfileInfo>
        <Styled.Avatar src={DefaultAvatar} alt="Your avatar" />
        <h2>Your Name</h2>
        <MailLink href="/opened-resume" />
      </Styled.ProfileInfo>

      <OpenedContainer name="Contact details">
        <OpenedInfo title="Country" description="Belarus" />
        <OpenedInfo title="City" description="Minsk" />
        <OpenedInfo title="Gender" description="Male" />
        <OpenedInfo title="Date of birth" description="31.02.2003" />
        <OpenedInfo title="E-mail" description="test@test.test" />
      </OpenedContainer>

      <OpenedContainer name="About me">
        <OpenedAboutMe description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, natoque integer vehicula vel in nulla. Non sollicitudin ipsum, ac ultricies risus integer egestas phasellus. Non sollicitudin ipsum, ac ultricies risus integer egestas phasellus." />
      </OpenedContainer>

      <OpenedContainer name="Skills">
        <OpenedTags
          description={[
            "Adobe Illustrator",
            "Affter Effects",
            "Photoshop",
            "Figma",
            "Sketch",
            "3ds MAX",
          ]}
        />
      </OpenedContainer>

      <OpenedContainer name="Languages">
        <OpenedTags description={["English", "Germany", "Spanish"]} />
      </OpenedContainer>

      <OpenedContainer name="Work Experience">
        <OpenedInfo title="Start of work" description="July 2019" />
        <OpenedInfo title="End" description="September 2019" />
        <OpenedInfo title="Organization" description="Omertex" />
        <OpenedInfo title="Position" description="Designer" />
      </OpenedContainer>

      <OpenedContainer name="Education">
        <OpenedInfo title={2016}>
          <OpenedEducation>
            <h6>Belarusian State University</h6>
            <p>Faculty of social and cultural communication</p>
            <p>Bachelor’s Degree</p>
            <p>Design</p>
          </OpenedEducation>
        </OpenedInfo>

        <OpenedInfo title={2017}>
          <OpenedEducation>
            <h6>IT-Academy</h6>
            <p>Web and mobile app design</p>
            <p>Course</p>
            <p>UX/UI Designer</p>
          </OpenedEducation>
        </OpenedInfo>
      </OpenedContainer>
    </Styled.Container>
  )
};

const mapStateToProps = (state) => {
  return {
    address: state.auth.address,
    avatar: state.applicant.details.avatar,
    name: state.applicant.details.name,
  };
};

export default connect(mapStateToProps)(OpenedResume);
