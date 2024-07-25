'use client'
import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import Tile from '@/components/tabs/Tile';
import classtabs from "@/data/classtabs.json";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

function classtabsdata() {

    const class12th = classtabs.class12th;
    const class11th = classtabs.class11th;
    const class10th = classtabs.class10th;
    const class9th = classtabs.class9th;

    return (
        <div className="flex w-vw flex-col justify-center items-center pt-20 overflow-hidden">
            <Tabs aria-label="dynamic" size='lg' radius='md' variant='solid' color='danger' className='items-center drop-shadow-md' >
                <Tab key="class12th" title="Class 12th">
                    <div className="tile-container chapter-tiles">
                        {class12th.map((tile) => (
                            <Tile className="tab"
                                key={tile.title}
                                image={tile.image}
                                title={tile.title}
                                link={tile.link}
                            />
                        ))}
                    </div>
                    <Popover placement="bottom" showArrow={true} backdrop="blur" >
                        <PopoverTrigger>
                            <Button>Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </Tab>
                <Tab key="class11th" title="Class 11th" className=''>
                    <div className="tile-container">
                        {class11th.map((tile) => (
                            <Tile className="tab"
                                key={tile.title}
                                image={tile.image}
                                title={tile.title}
                                link={tile.link}
                            />
                        ))}
                    </div>
                </Tab>
                <Tab key="class10th" title="Class 10th">
                    <div className="tile-container chapter-tiles">
                        {class10th.map((tile) => (
                            <Tile className="tab"
                                key={tile.title}
                                image={tile.image}
                                title={tile.title}
                                link={tile.link}
                            />
                        ))}
                    </div>
                </Tab>
                <Tab key="class9th" title="Class 9th">
                    {/* <Card className='bg-transparent'>
                        <CardBody>

                        </CardBody>
                    </Card> */}

                    <div className="tile-container chapter-tiles">
                        {class9th.map((tile) => (
                            <Tile className="tab"
                                key={tile.title}
                                image={tile.image}
                                title={tile.title}
                                link={tile.link}
                            />
                        ))}
                    </div>
                </Tab>

            </Tabs>
        </div>
    )
}

export default classtabsdata