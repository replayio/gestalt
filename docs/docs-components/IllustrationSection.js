// @flow strict
import { Box, Flex, Heading } from 'gestalt';
import { type Node } from 'react';
import IllustrationContainer from './IllustrationContainer.js';

const MIN_SVG_ILLUSTRATION_WIDTH = 285;

type Props = {|
  title?: string,
  children?: Node,
  grid?: 'auto-fill' | 'auto-fit',
  min?: number,
|};

function IllustrationSection({
  children,
  title,
  grid = 'auto-fit',
  min = MIN_SVG_ILLUSTRATION_WIDTH,
}: Props): Node {
  return (
    <IllustrationContainer justifyContent="center">
      <Flex
        direction="column"
        gap={{
          row: 0,
          column: 6,
        }}
        maxWidth={1200}
        width="100%"
      >
        {title && (
          <Heading accessibilityLevel={2} size="500">
            {title}
          </Heading>
        )}
        <Box
          width="100%"
          dangerouslySetInlineStyle={{
            __style: {
              display: 'grid',
              gridTemplateColumns: `repeat(${grid}, minmax(${min}px, 1fr))`,
              columnGap: '24px',
              rowGap: '24px',
            },
          }}
        >
          {children}
        </Box>
      </Flex>
    </IllustrationContainer>
  );
}

export default IllustrationSection;
