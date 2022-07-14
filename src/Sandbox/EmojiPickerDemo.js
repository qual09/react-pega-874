import { useState } from 'react';
import { EmojiPicker, Flex, Input } from '@pega/cosmos-react-core';

const EmojiPickerDemo = () => {
  const value = 'test';
  // const [value, setValue] = useState('');
  const onEmojiSelect = emoji => {
    // setValue(curr => `${curr}${emoji.native}`);
  };

  return (
    <Flex container={{ direction: 'column' }}>
      <Input value={value} />
      <EmojiPicker showFooter={false} emojiSize={24} perLine={9} onSelect={onEmojiSelect} />
    </Flex>
  );
};

export default EmojiPickerDemo;
