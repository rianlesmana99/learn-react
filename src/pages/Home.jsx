import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Label from "../components/Label";
import PlaceContentCenter from "../components/PlaceContentCenter";

export default function Home() {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    function onChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <div className="max-w-lg">
                <Card>
                    <Card.Title>Form Pendaftaran</Card.Title>
                    <Card.Body>
                        <form onSubmit={onSubmit} className="flex flex-col">
                            <Label htmlFor="username">Username :</Label>
                            <Input onChange={onChange} name="username" id="username" placeholder="Input username" />

                            <Label htmlFor="email">Email :</Label>
                            <Input onChange={onChange} name="email" type="email" id="email" placeholder="Input email" />

                            <Label htmlFor="password">Password :</Label>
                            <Input onChange={onChange} name="password" type="password" id="password" placeholder="Input password" />
                            <Button type="submit">Daftar</Button>
                        </form>
                    </Card.Body>
                    <Card.Footer>
                        <p className="font-semibold">Create By: @rianlesmana99</p>
                        <p className="font-semibold">Refference: Parsinta - Belajar React dari Awal</p>
                    </Card.Footer>
                </Card>
            </div>
        </PlaceContentCenter>
    );
}
