import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import { ServiceCardProps } from './types';
import { strings } from '@/resources/strings';
import { getServiceStatusTagColor } from './utils';
import styled from '@emotion/styled';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const CustomizedCard = styled(Card)`
  min-height: 248px;
  position: relative;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const EditIcon = styled(FlashOnIcon)`
  color: #ffc107;
  height: 0.6em;
  width: 0.6em;
  vertical-align: bottom;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 10px;
`;

const InfoContainer = styled.div`
  font-size: 0.875em;
  text-align: justify;
  margin-top: 0.5em;
`;

export default React.memo(function ServiceCard({ data }: ServiceCardProps) {
  const { name, deleteurl, keytype, website, info, difficulty } = data || {};

  const CustomizedChip = styled(Chip)`
    background: ${getServiceStatusTagColor(keytype)};
    color: white;
    border-radius: 0.25rem;
    font-size: 13px;
    min-width: 71px;
    margin-right: 10px;
  `;
  return (
    <CustomizedCard variant="outlined">
      <CardContent>
        <TitleContainer>
          <Link
            href={website}
            target="_blank"
            variant="h5"
            fontSize="1.25rem"
            underline="none"
            color="black"
            marginRight="4px">
            {name}
          </Link>
          <Link
            href="https://github.com/rtbf-ir/rtbf.ir/issues/new/choose"
            target="_blank"
            fontSize="12px"
            fontWeight={500}
            underline="none"
            color="#ffc107"
            title={strings.edit_service_hint}>
            <EditIcon />
            {strings.edit}
          </Link>
        </TitleContainer>

        <InfoContainer>
          <div dangerouslySetInnerHTML={{ __html: info }} />
        </InfoContainer>
      </CardContent>
      <CardActions>
        <CustomizedChip label={difficulty} />
        {(deleteurl || '')?.length > 1 && (
          <Button
            href={deleteurl}
            target="_blank"
            color="error"
            variant="contained"
            size="small">
            <DeleteIcon />
            {strings.delete_account}
          </Button>
        )}
      </CardActions>
    </CustomizedCard>
  );
});
