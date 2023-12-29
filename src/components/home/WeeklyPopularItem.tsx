import { WeeklyPopularTypes } from '@/types/types';
import { styled } from 'styled-system/jsx';
import { Align } from '@/styles/layout';
import convertBrandName from '@/utils/convertBrandName';

const WeeklyPopularItem = ({ data }: { data: WeeklyPopularTypes }) => {
  const icon = `/png/${data.brand}.png`;

  return (
    <Container className={Align}>
      <span>{data.ranking}</span>
      <BrandInfo className={cx(Flex, Align)}>
        <Icon>
          <img
            src={icon}
            alt={data.brand}
          />
        </Icon>
        <span>{convertBrandName(data.brand)}</span>
      </BrandInfo>
    </Container>
  );
};

const Container = styled.div`
  height: 54px;
  border-radius: 50px;
  padding: 8px 20px;
  background: #fff;
`;
const BrandInfo = styled.div`
  margin-left: 20px;
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: darkkhaki;
  margin-right: 12px;
`;

export default WeeklyPopularItem;
