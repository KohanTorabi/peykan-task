import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { strings } from '@/resources/strings';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 340px;
  margin-bottom: 40px;
  img {
    object-fit: cover;
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: end;
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
      <Image src="https://rtbf.ir/assets/img/header.png" fill alt="banner" />
      <ContentContainer>
        <GithubLink
          href="https://github.com/rtbf-ir/rtbf.ir/issues/new/choose"
          title={strings.participate_hint}
          variant="contained"
          startIcon={<GitHubIcon fontSize="small" />}>
          {strings.participate_hint}
        </GithubLink>
        <TwitterIconLink
          href="https://twitter.com/intent/tweet?text=%D8%A7%DA%AF%D8%B1%20%D8%B4%D9%85%D8%A7%20%D9%87%D9%85%20%D8%AD%D8%B0%D9%81%20%D8%AD%D8%B3%D8%A7%D8%A8%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%DB%8C%20%D8%B1%D8%A7%20%D8%AF%D8%BA%D8%AF%D8%BA%D9%87%E2%80%8C%DB%8C%20%D8%AE%D9%88%D8%AF%20%D9%85%DB%8C%E2%80%8C%D8%AF%D8%A7%D9%86%DB%8C%D8%AF%20%D8%A7%D8%B2%20%D8%A7%DB%8C%D9%86%20%D8%B3%D8%B1%D9%88%DB%8C%D8%B3%20%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87%20%DA%A9%D9%86%DB%8C%D8%AF%20:%20www.rtbf.ir%20-%20@rtbf_ir"
          title={strings.do_twit}
          variant="contained"
          startIcon={<TwitterIcon fontSize="small" />}>
          {strings.do_twit}
        </TwitterIconLink>
      </ContentContainer>
    </BannerContainer>
  );
}
