import {
  Button,
  FormControl,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";

const inputs = ["Your Name", "Your Email", "Your Subject"];

export default function OrderForm() {
  return (
    <FormControl as="fieldset" marginBlockStart="36px">
      <InputGroup variant="flushed" flexDirection="column" gridGap="12px">
        {inputs.map((input, key) => (
          <Input
            key={key}
            placeholder={input}
            _placeholder={{ color: "white" }}
            _focus={{
              borderColor: "candyPink.900",
              boxShadow: " 0px 1px 0px 0px #EF7474",
            }}
          />
        ))}
      </InputGroup>
      <Textarea
        paddingBlockStart="20px"
        placeholder="Your message..."
        marginBlockEnd="40px"
        variant="flushed"
        borderRadius="none"
        _placeholder={{ color: "white" }}
        _focus={{
          borderColor: "candyPink.900",
          boxShadow: " 0px 1px 0px 0px #EF7474",
        }}
      />
      <Button
        textTransform="capitalize"
        color="charlestonGreen.900"
        borderColor="transparent"
        _hover={{ backgroundColor: "candyPink.900", color: "white" }}
      >
        send message
      </Button>
    </FormControl>
  );
}
