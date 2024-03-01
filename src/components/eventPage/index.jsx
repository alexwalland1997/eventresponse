import "./index.css"
import Form from "./form"
import event from "./../../data/data.json"
import party from "party-js";

export default function eventPage() {
    return (
        <>
        <div id="invite" onClick={(e)=>party.confetti(e.target)}>
            <h1>You're invited to {event.name}</h1>
            <h2>The event is on {event.date} and will be held at {event.venue}</h2>
        </div>
        <Form/>
        </>
    );
}