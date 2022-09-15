import { Button, Flex } from "@chakra-ui/react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const DateRange = ({ setFilterOn, selectionRange, setSelectionRange }) => {
  const handleChange = (ranges) => {
    setSelectionRange(ranges?.selection);
  };
  return (
    <Flex
      flexDirection={"column"}
      position="absolute"
      top={0}
      right={0}
      boxShadow="2xl"
      bg={"white"}
      padding={10}
      zIndex={10}
    >
      <DateRangePicker ranges={[selectionRange]} onChange={handleChange} />
      <Button
        size={"md"}
        onClick={() => setFilterOn(false)}
        colorScheme={"pink"}
      >
        Close
      </Button>
    </Flex>
  );
};

export default DateRange;
