
"use client";

import { Label, Textarea, Button } from "flowbite-react";

export default function Component() {
    return (
        <>
            <div className="form-hero">
                <form>
                    <div className="max-w-md">
                        <div className="mb-5 block">
                            <Label htmlFor="comment" value="Your Event to publish" className="font-bold uppercase label"/>
                        </div>
                        <Textarea id="comment" name="event" placeholder="Leave a comment..." required rows={7} />
                    </div>
                    <Button className="w-full mt-4" type="submit">
                        Create event
                    </Button>
                </form>
            </div>
        </>
    );
}
