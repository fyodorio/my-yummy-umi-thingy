import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Typography } from 'antd';
import { useState } from 'react';
import styles from './index.less';

const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        This is my humble attempt to comprehend UmiJS
        <Card className={styles.counterCard}>
          <Title level={3}>Counter Example</Title>
          <div className={styles.counterContent}>
            <Button type="primary" onClick={() => setCount(count - 1)}>
              Decrease
            </Button>
            <Text className={styles.counterValue}>{count}</Text>
            <Button type="primary" onClick={() => setCount(count + 1)}>
              Increase
            </Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
