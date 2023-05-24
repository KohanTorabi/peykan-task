import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { strings } from '@/resources/strings';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { BannerImgUrl, GitHubUrl, TwitterUrl } from '@/constants/urls';

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  height: 340px;
  margin-bottom: 40px;
  img {
    object-fit: cover;
    object-position: -631px;
  }

  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 630px) {
    img {
      object-position: unset;
    }
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

const GithubLink = styled(Button)`
  background: #058c15;
  color: white;
`;

const TwitterIconLink = styled(Button)`
  background: #262626;
  color: white;
  margin-left: 10px;
`;

export default function HomeBanner() {
  return (
    <BannerContainer>
      <Image src={BannerImgUrl} fill alt="banner" />
      <ContentContainer maxWidth="xl">
        <GithubLink
          href={GitHubUrl}
          title={strings.participate_hint}
          variant="contained"
          startIcon={<GitHubIcon fontSize="small" />}>
          {strings.participate_hint}
        </GithubLink>
        <TwitterIconLink
          href={TwitterUrl}
          title={strings.do_twit}
          variant="contained"
          startIcon={<TwitterIcon fontSize="small" />}>
          {strings.do_twit}
        </TwitterIconLink>
      </ContentContainer>
    </BannerContainer>
  );
}
