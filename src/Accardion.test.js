const { Accardion } = required('./Accardion')
import { render, fireEvent } from '@testing-library/react'
import Accardion from './Accardion'

test('accordion test', () => {
    const item = { header: 'Favorite Hats', body: 'Fedoras are classy', };
    const children = {
        header: 'Favorite Footware',
        body: 'Flipflops are the best',
    };

    const { getByText, queryByText, } = render(
        <Accardion items={[item, children]} />
    );
    expect(getByText(item.header)).toBeInTheDocument();
    expect(queryByText(children.body)).toBeNull();
    fireEvent.click(getByText(children.header));
    expect(getByText(children.body)).toBeInTheDocument();
    expect(queryByText(item.body)).toBeNull();
});