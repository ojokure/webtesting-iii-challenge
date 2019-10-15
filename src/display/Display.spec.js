// Test away!

// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display />);
});

describe('Display', () => {
    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    })

    it("displays 'Closed' if the `closed` prop is `true`", () => {
        let wrapper = rtl.render(<Display closed={true} />);
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    })

    it("displays 'Open' if otherwise", () => {
        wrapper.debug()
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    })

    it("displays 'Locked' if the `locked` prop is `true`", () => {
        let wrapper = rtl.render(<Display locked={true} />);
        expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
    })

    it("displays 'Unlocked' if otherwise", () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    })

    test('when `locked` or `closed` use the `red-led` class', () => {
        let wrapper = rtl.render(<Display locked={true} closed={true} />);
        expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
        expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
    })

     test('when `closed`, displayed `red-led` class', () => {
        let wrapper = rtl.render(<Display closed={true} />);
        expect(wrapper.queryByText(/Locked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/Locked/i)).toBeInTheDocument();
    })
})