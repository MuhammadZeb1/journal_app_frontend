import React from 'react'
// import AuthorsResponsibilities from './AuthorsResponsibilities/AuthorsResponsibilities1.jsx';
import ManuscriptEvaluation from './AuthorsResponsibilities/ManuscriptEvaluation.jsx';
import ManuscriptDesign from './AuthorsResponsibilities/ManuscriptDesign.jsx';
import ManuscriptGuidelines from './AuthorsResponsibilities/ManuscriptGuidelines.jsx';
import AuthorsResponsibilities1 from './AuthorsResponsibilities/AuthorsResponsibilities1.jsx';

function AuthorsResponsibilities() {
  return (
    <div>

        <AuthorsResponsibilities1/>
        <ManuscriptEvaluation/>
        <ManuscriptDesign/>
        <ManuscriptGuidelines/>
    </div>
  )
}

export default AuthorsResponsibilities