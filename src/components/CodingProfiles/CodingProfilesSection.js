import React from 'react';
import styled from 'styled-components';
import { codingProfiles } from '../../data/constants';
import { FaCode} from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
`;

const ProfilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;

const ProfileCard = styled.a`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  color: ${({ theme }) => theme.text_primary};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px);
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Platform = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'leetcode':
      return <SiLeetcode />;
    case 'codechef':
      return <SiCodechef />;
    case 'codeforces':
      return <SiCodeforces />;
    default:
      return <FaCode />;
  }
};

const CodingProfilesSection = () => {
  return (
    <Container id="coding-profiles">
      <Title>Coding Profiles</Title>
      <Desc>My journey in problem-solving and competitive programming. Click to visit profile</Desc>
      <ProfilesWrapper>
        {codingProfiles.map((profile, index) => (
          <ProfileCard
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>{getPlatformIcon(profile.platform)}</IconWrapper>
            <Platform>{profile.platform}</Platform>
            <Description>{profile.description}</Description>
          </ProfileCard>
        ))}
      </ProfilesWrapper>
    </Container>
  );
};

export default CodingProfilesSection;
