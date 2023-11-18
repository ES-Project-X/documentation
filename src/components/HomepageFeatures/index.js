import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
      title: 'Map View',
      Svg: require('@site/static/img/doc-map-view-no-bg.svg').default,
      description: (
        <>
          Find your current location, search for places or find new cyclying 
          paths - the choice is yours. Map tiles are provided by CyclOSM,
          a custom OpenStreetMap layer.
        </>
      ),
    },
  {
    title: 'Route Planner',
    Svg: require('@site/static/img/doc-route-planner-no-bg.svg').default,
    description: (
      <>
        Plan your next bicycle trip with the power of GraphHopper, a routing
        engine which will plan the best route for you and your bicycle.
      </>
    ),
  },
  {
    title: 'Points of Interest',
    Svg: require('@site/static/img/doc-poi-no-bg.svg').default,
    description: (
      <>
        Find useful places such as bicycle parking, water fountains or benches near you. 
        Contribute to the community by adding or reviewing points of interest.
      </>
    ),
  },
  {
    title: 'Community Collaboration',
    Svg: require('@site/static/img/doc-community-no-bg.svg').default,
    description: (
      <>
        Earn points by contributing to the community and keep track of your progress.
        Compete with other users and get to the top of the leaderboard.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
