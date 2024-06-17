import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Message Componentの動作確認', () => {
    describe('初期表示の正常確認', () => {
        test('入力された文字が画面上に存在', () => {
            render(<Message />);
            const h2El = screen.getByRole('heading', { name: '入力された文字:' });
        });
        expect(h2El).toBeInTheDocument();
    });
    describe('画面操作の正常確認', async () => {
        test('入力値の変更 > 送信ボタン押下',  () => {
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            const btnEl = screen.getByRole('button', { name: '送信ボタン'});
            const h2El = screen.getByRole('heading', { name: '入力された文字:' });
        });
        expect(btnEl).toBeDisabled();
        expect(inputEl.value).toBe("");

        await user.type(inputEl, "こんにちわ");

        expect(btnEl).not.toBeDisabled();

        await user.click(btnEl);

        expect(h2El.textContent).toBe('入力された文字: こんにちわ')
    });
});