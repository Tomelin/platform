import React from 'react';
import { Typography, Grid, FormControl, TextField, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
} from '@backstage/core-components';
import axios from 'axios';

export const request = async() =>{
  console.log('teste')
  return 'teste'
}
export const ExampleComponent = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    
    // const formData = {
    //   name: event.currentTarget.elements.namedItem('name'),
    //   email: event.currentTarget.elements.namedItem('email'),
    //   subject: event.currentTarget.elements.namedItem('subject'),
    //   description: event.currentTarget.elements.namedItem('description'),
    // };
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
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:7007/api/proxy/mailtrap',
      headers: { 
        'Authorization': 'Bearer 72d73d3db9cd044d114a47d097001236', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(JSON.stringify(error.status));
      console.log(error);
    });
    

  };

  

  return (
    <Page themeId="tool">
      <Header title="Bem vindo ao suporte!" subtitle="developer portal">
      </Header>
      <Content>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="Suporte">
              <Typography variant="body1">
                Suporte  ao developer portal.  A plataforma tem como objetivo de agilizar o processo de desenvolvimento.
                <form onSubmit={handleSubmit}>
                  <Grid item>
                    <FormControl required={true}>
                      <TextField
                        id="username"
                        label="Nome"
                        placeholder='Primeiro nome'
                        variant="outlined"
                        required={true}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl required={true}>
                      <TextField
                        id="email"
                        label="Seu email"
                        placeholder='user@dominio.com.br'
                        variant="outlined"
                        required={true}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl required={true}>
                      <TextField
                        id="subject"
                        label="Assunto do email"
                        defaultValue='Gostaria de informações sobre developer portal'
                        placeholder='Gostaria de informações sobre developer portal'
                        variant="outlined"
                        required={true}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl required={true}>
                      <TextField
                        maxRows={3}
                        id="description"
                        label="Descrição do email"
                        defaultValue='Gostaria de mais informações sobre developer portal....'
                        placeholder='Gostaria de mais informações sobre developer portal....'
                        variant="outlined"
                        required={true}
                        inputProps={{
                          style: {
                            height: "200px",
                            width: "50%",
                          },
                        }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <Button variant="contained" type='submit' value='submit' >
                      Contained
                    </Button>
                  </Grid>
                </form>
              </Typography>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  )
};
