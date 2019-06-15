import React from "react";
import { Grid } from "semantic-ui-react";

function Footer() {
  return (
    <footer>
      <div className="footerHeader centered">
        <h2>Make the world a better place for one kid</h2>
      </div>
      <div className="ui container">
        <Grid columns={3} divided padded>
          <Grid.Row>
            <Grid.Column>
              <h2>About us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h2>Our Location </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.0837064906!2d35.66744174160663!3d31.836036762053016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1499168051085"
                allowfullscreen
              />
            </Grid.Column>
            <Grid.Column>
              <h2>Contact Us</h2>
              <ul>
                <li>Phone : 123 - 456 - 789</li>
                <li>E-mail : info@comapyn.com</li>
                <li>Fax : 123 - 456 - 789</li>
              </ul>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <ul className="sm">
                <li>
                  <a href="#">
                    <img
                      src="https://www.facebook.com/images/fb_icon_325x325.png"
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300"
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="http://playbookathlete.com/wp-content/uploads/2016/10/twitter-logo-4.png"
                      className="img-responsive"
                    />
                  </a>
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="footerFooter">
        <p className="centered">
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <span>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
