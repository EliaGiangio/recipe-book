import { useState } from 'react';
import RecipeHighlight from './RecipeHighlight'

export default function Recipe({ name, ingredients, explanation }) {
    const [style, setStyle] = useState({ display: 'none' });
    return (
        <>
            <div>
                <div className="card pepe"
                    onMouseEnter={e => {
                        setStyle({ display: 'block' });
                    }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="list-group-item">{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <RecipeHighlight
                title={name}
                description={explanation}
                calories='350'
                time='20min'
                style={style} />

        </>
    );
}
