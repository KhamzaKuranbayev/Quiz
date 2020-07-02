﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz.Backend.Models;

namespace Quiz.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody] Question question)
        {
        }

        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return new Question[] {
                new Question { Text = "Git'ning asoschisi kim"},
                new Question { Text = "Yer Quyosh tizimidagi nechinchi sayyora"},
            };
        }

    }
}