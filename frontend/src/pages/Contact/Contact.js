import React from 'react';

import Base from 'src/common/components/Base';

// eslint-disable-next-line arrow-body-style
const Contact = () => {
  const [formContactValues, setFormContactValues] = useState();

  const onSubmit = (values) => {
    setFormContactValues(values);
  };
  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Connexion</h2>
          <Form
            className={classes.form}
            onSubmit={onSubmit}
            initialValues=""
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  type="text"
                  label="Name"
                  name="name"
                  margin="none"
                  required={true}
                />
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  margin="none"
                  required={true}
                />
                <TextField
                  type="text"
                  label="Site internet"
                  name="website"
                  margin="none"
                  required={true}
                />
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  margin="none"
                  required={true}
                />
                <Box className={classes.containerButton}>
                  <Button
                    className={classes.submit}
                    variant="contained"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                  <p className={classes.inscription} onClick="#"> Pas de compte ? Je veux m'inscrire </p>
                </Box>
              </form>
            )}
          />
        </Box>
      </div>
    </Base>
  );
};


Contact.propTypes = {

};

export default Contact;
