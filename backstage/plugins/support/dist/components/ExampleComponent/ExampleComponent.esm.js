import React from 'react';
import { Grid, Typography, FormControl, TextField, Button } from '@material-ui/core';
import { Page, Header, Content, InfoCard } from '@backstage/core-components';
import axios from 'axios';

const ExampleComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
      "from": {
        "email": "mailtrap@synera.com.br",
        "name": "Mailtrap Test"
      },
      "to": [
        {
          "email": "rafael.tomelin@gmail.com"
        }
      ],
      "subject": "You are awesome!",
      "text": "Congrats for sending test email with Mailtrap!",
      "category": "Integration Test"
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:7007/api/proxy/mailtrap",
      headers: {
        "Authorization": "Bearer 72d73d3db9cd044d114a47d097001236",
        "Content-Type": "application/json"
      },
      data
    };
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.data));
    }).catch((error) => {
      console.log(JSON.stringify(error.status));
      console.log(error);
    });
  };
  return /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: "Bem vindo ao suporte!", subtitle: "developer portal" }), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "column" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(InfoCard, { title: "Suporte" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, "Suporte  ao developer portal.  A plataforma tem como objetivo de agilizar o processo de desenvolvimento.", /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(FormControl, { required: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "username",
      label: "Nome",
      placeholder: "Primeiro nome",
      variant: "outlined",
      required: true
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(FormControl, { required: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "email",
      label: "Seu email",
      placeholder: "user@dominio.com.br",
      variant: "outlined",
      required: true
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(FormControl, { required: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      id: "subject",
      label: "Assunto do email",
      defaultValue: "Gostaria de informa\xE7\xF5es sobre developer portal",
      placeholder: "Gostaria de informa\xE7\xF5es sobre developer portal",
      variant: "outlined",
      required: true
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(FormControl, { required: true }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      maxRows: 3,
      id: "description",
      label: "Descri\xE7\xE3o do email",
      defaultValue: "Gostaria de mais informa\xE7\xF5es sobre developer portal....",
      placeholder: "Gostaria de mais informa\xE7\xF5es sobre developer portal....",
      variant: "outlined",
      required: true,
      inputProps: {
        style: {
          height: "200px",
          width: "50%"
        }
      }
    }
  ))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(Button, { variant: "contained", type: "submit", value: "submit" }, "Contained")))))))));
};

export { ExampleComponent };
//# sourceMappingURL=ExampleComponent.esm.js.map
