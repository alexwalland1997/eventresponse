import { Label, Textarea, TextInput, Button, Select } from "flowbite-react";
import "./index.css"

export default function eventPage() {
  return (
    <div className="flex max-w-md flex-col m-8 cForm">
      <form method="POST" netlify>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Name/Family Name"/>
        <TextInput id="name" placeholder="name"/>
      </div>
      <div className="mb-2 block">
        <Label htmlFor="attendance" value="Are you able to attend"/>
        <Select id="attendance" required>
            <option>Yes</option>
            <option>No</option>
        </Select>
        </div>
        <div className="mb-2 block">
        <Label htmlFor="allergies" value="Please list any allergies"/>
        <Textarea id="allergies" placeholder="Leave any allergies"/>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
