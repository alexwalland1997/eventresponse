import { Label, Textarea, TextInput, Button, Select } from "flowbite-react";
import React, { useRef, useState } from 'react';
import { AddToCalendarButton } from "add-to-calendar-button-react";
import emailjs from "@emailjs/browser"

export default function Form() {
  const form = useRef();
  const [disable, setDisable] = useState(false)

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs
        .sendForm(
          'service_20d6lpp',
          'template_uywzjbq',
           form.current,
          'lB9zEbiDA5rpQkSct'
        )
        .then (
            () => {
              setDisable(true);
            },
            () => {
            }
        )
        e.target.reset();
        

  }

  return (
    <>
      <div className="cForm">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4 block">
            <Label htmlFor="name" value="Name/Family Name" />
            <TextInput id="name" name="name" required/>
          </div>
          <div className="mb-4 block">
            <Label htmlFor="attendance" value="Are you able to attend" />
            <Select id="attendance" name="attendance" required>
              <option>Yes</option>
              <option>No</option>
            </Select>
          </div>
          <div className="mb-4 block">
            <Label htmlFor="allergies" value="Please list any allergies as well as your meal choice" />
            <Textarea
              id="allergies"
              name="allergies"
              rows="10"
              required
            />
          </div>
          <Button type="submit" id="submit" disabled={disable}>Submit</Button>
        </form>
      </div>
      <div id="info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.1022672443964!2d0.7942248765387204!3d51.82256227188666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d91d16a33f1d9b%3A0xd075cbfdc783b725!2sLayer%20Marney%20Tower%20Weddings!5e0!3m2!1sen!2suk!4v1710008834105!5m2!1sen!2suk"
          id="venue"
          title="venu"
          width="550"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div id="inviteBtn">
        <AddToCalendarButton
          name="Sam and Alex's Wedding"
          description="Samantha Hatton and Alexander's Wedding"
          options={['Apple','Google','iCal','Outlook.com','Yahoo']}
          location="Layer Marney Tower C05 9US"
          startDate="2025-05-04"
          endDate="2025-05-05"
          startTime="13:00"
          endTime="00:00"
          timeZone="Europe/London"
          buttonStyle="3d"
          listStyle="dropup-static"
          hideBackground
          size="5"
        ></AddToCalendarButton>
        </div>
      </div>
    </>
  );
}
