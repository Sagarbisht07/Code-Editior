import { useContext } from "react";

import Editor from "./Editor";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../context/DataProvider";
import HtmlIcon from "@mui/icons-material/Html";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon={"https://icon-library.com/images/html-5-icon/html-5-icon-6.jpg"}
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon={"https://icon-library.com/images/css3-icon/css3-icon-28.jpg"}
        color="#0EBEFF"
      />
      <Editor
        language="javascript"
        heading="JavaScript"
        value={js}
        onChange={setJs}
        icon={
          "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg "
        }
        color="#FCD000"
      />
    </Container>
  );
};

export default Code;
