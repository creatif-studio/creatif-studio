import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

export default function ListServer() {
  const headers = ["NAME", "IP", "WEB SERVER", "APPS"];

  return (
    <Box>
      <ListHeader items={headers} />
    </Box>
  );
}
