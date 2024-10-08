import { Text, Title } from '@mantine/core';
import classes from './AppHeadingText.module.css';

export function AppHeadingText() {
  return (
    <Title className={classes.title} ta="center" mt={100}>
      simple question?{' '}
      <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
        ok!
      </Text>
    </Title>
  );
}
