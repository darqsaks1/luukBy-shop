import React, { useEffect } from 'react';
import { setHref } from '../../../actions/actions-creator';

import RenderTittles from './render-titles'

const FirstProductSection = (props) => {
    let {
        hrefState, setHrefState
    } = props;

    return (
        <div>
            <h2>Хиты продаж</h2>
            <RenderTittles
                hrefState={hrefState}
                setHrefState={setHrefState} />
        </div>
    );
}

export default FirstProductSection;
