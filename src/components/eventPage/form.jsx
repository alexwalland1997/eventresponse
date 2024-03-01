import { Label, Textarea, TextInput, Button, Select } from "flowbite-react";
import "./index.css"
import party from "party-js";

export default function form() {
function submitForm(e) {
 e.preventDefault();
 party.sparkles(e.target);
}

  return (
    <div className="flex max-w-md flex-col m-8 cForm">
      <form>
      <div className="mb-4 block">
        <Label htmlFor="name" value="Name/Family Name"/>
        <TextInput id="name" placeholder="name"/>
      </div>
      <div className="mb-4 block">
        <Label htmlFor="attendance" value="Are you able to attend"/>
        <Select id="attendance" required>
            <option>Yes</option>
            <option>No</option>
        </Select>
        </div>
        <div className="mb-4 block">
        <Label htmlFor="allergies" value="Please list any allergies"/>
        <Textarea id="allergies" rows="10" placeholder="Leave any allergies"/>
        </div>
        <Button type="submit" id="submit" onClick={(e)=>submitForm(e)}>Submit</Button>
      </form>
    </div>
  );
}
