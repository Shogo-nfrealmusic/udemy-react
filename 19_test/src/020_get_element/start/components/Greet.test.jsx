import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it('should have h1 tag', () => {
    const {debug, container} = render(<Greet />);
    // const h1El = screen.getByText("こんにちは");
    // expect(h1El).toBeInTheDocument();

    // const radioEl = screen.getByRole('radio')
    // debug(radioEl);
    // expect(radioEl).toBeInTheDocument();

    // const imgEl = screen.getByRole('img')
    // debug(imgEl);

    // const headingEl = screen.getByRole('heading', { name: 'こんにちは'})
    // const h2El = container.querySelector('h2');
    // debug(h2El);

    // const elByLabel = screen.getByLabelText('氏名')
    // debug(elByLabel)

    const elByPlaceholder = screen.getByPlaceholderText('Code Mafia');
     debug(elByPlaceholder);
})