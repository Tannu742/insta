import React, { useState } from 'react';
import { Stories, suggestions } from '../../constants/data';
import Request from '../../components/friendrequest';
import avatar from '../../assets/img/avatar.jpg';
import { useLoaderData } from 'react-router-dom';
import Posts from '../../components/posts';
import ModalBox from '../../components/modal';

const Home = () => {
    const [show, setShow] = useState(false);
    const loader = useLoaderData();
    console.log({ loader });

    return (
        <main>
            <div className='home container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='d-flex story'>
                            <ModalBox show={show} />
                            {
                                Stories.map((item) => {
                                    return (
                                        <div key={item.id} className='story_container text-center' onClick={() => setShow(true)}>
                                            <div className='stories' >
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className='Story_text'>
                                                <span>{item.head}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='row'>
                            {
                                loader?.data ? loader.data.map((item) => <Posts key={item.id} thumbnail={item.thumbnailUrl} title={item.title} url={item.url} />) : null
                            }
                        </div>
                    </div>
                    <div className='col-4 suggestions'>
                        <Request img={avatar} name={'Miss Rajput'} para={'Welcome to Instagram'} btn={'Sign Out'} />
                        <div className='d-flex justify-content-evenly'>
                            <p>Suggestions For you</p>
                            <span>See all</span>
                        </div>
                        {
                            suggestions.map((item) => {
                                return (
                                    <Request key={item.id} img={item.img} name={item.name} para={'New to Instagram'} btn={'Follow'} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
