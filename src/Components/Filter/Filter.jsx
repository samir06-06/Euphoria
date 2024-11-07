import React from "react"
import db from "../../data/db.json"
import { useState } from "react"
import "../Filter/Filter.scss"
import purple from "../../assets/img/purple.png"
import black from "../../assets/img/black.png"
import red from "../../assets/img/red.png"
import orange from "../../assets/img/orange.png"
import navy from "../../assets/img/navy.png"
import white from "../../assets/img/white.png"
import broom from "../../assets/img/broom.png"
import green from "../../assets/img/green.png"
import yellow from "../../assets/img/yellow.png"
import grey from "../../assets/img/grey.png"
import pink from "../../assets/img/pink.png"
import blue from "../../assets/img/blue.png"
import {
  fetchProducts,
  filterByCategory,
  filterByColor,
  filterBySize,
  filterByStyle,
  filterByGender,
  maxPriceChange,
  minPriceChange,
} from "../../redux/slice/ProductsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function Filter() {
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const dispatch = useDispatch()

  function handleFilterCollapse() {
    const menuButton = document.querySelector(".menu-button")
    const filterComponent = document.getElementById("filter")

    if (menuButton && filterComponent) {
      filterComponent.style.display =
        filterComponent.style.display === "block" ? "none" : "block"
    }
  }

  const collapse = (e) => {
    const currentDiv = e.target
    const nextDiv = currentDiv.nextElementSibling
    const icon = currentDiv.querySelector(".fa-chevron-down")

    if (nextDiv && nextDiv.tagName.toLowerCase() === "div") {
      if (nextDiv.style.display === "none") {
        nextDiv.style.display = ""
        icon.classList.remove("rotate")
      } else {
        nextDiv.style.display = "none"
        icon.classList.add("rotate")
      }
    }
  }

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1100)

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value)
    setMinValue(value)
    dispatch(minPriceChange(e.target.value))
  }

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value)
    setMaxValue(value)
    dispatch(maxPriceChange(e.target.value))
  }

  const handleFilterByCategory = (e, category) => {
    const isActive = e.target.style.color === "black"

    if (isActive) {
      e.target.style.color = ""
    } else {
      e.target.style.color = "black"
    }

    dispatch(filterByCategory(category))
  }

  const handleFilterBySize = (e) => {
    const isActive = e.target.getAttribute("data-active") === "true"

    if (isActive) {
      e.target.style.color = ""
      e.target.style.backgroundColor = ""
      e.target.setAttribute("data-active", "false")
    } else {
      e.target.style.color = "white"
      e.target.style.backgroundColor = "purple"
      e.target.setAttribute("data-active", "true")
    }

    dispatch(filterBySize(e.target.innerText))
  }
  const handleFilterByColor = (e) => {
    // const icon = e.target.closest(".fa-circle-check")
    const colorChoice = e.target.closest(".c-choice")
    const colorText = colorChoice.querySelector("p").textContent
    if (colorChoice) {
      const checkIcon = colorChoice.querySelector(".fa-circle-check")
      if (checkIcon) {
        checkIcon.classList.toggle("hidden")
      }
    }

    dispatch(filterByColor(colorText))
  }
  const handleFilterByStyle = (e, style) => {
    const isActive = e.target.style.color === "black"

    if (isActive) {
      e.target.style.color = ""
    } else {
      e.target.style.color = "black"
    }

    dispatch(filterByStyle(style.toLowerCase()))
  }

  const handleFilterByGender = (e, gender) => {
    const genderChoiceElement = document.querySelector(".gender-choice")
    const isActive = e.target.style.color === "black"

    // Toggle active state
    if (isActive) {
      e.target.style.color = ""
      e.target.classList.remove("active-gender")
    } else {
      e.target.style.color = "black"
      e.target.classList.add("active-gender")
    }

    // Check the active state of both "Men" and "Women" elements
    const menIsActive = document
      .querySelector(".men-clothing")
      .classList.contains("active-gender")
    const womenIsActive = document
      .querySelector(".women-clothing")
      .classList.contains("active-gender")

    // Update gender heading based on active states
    if (menIsActive && womenIsActive) {
      genderChoiceElement.innerText = "Clothing"
    } else if (menIsActive) {
      genderChoiceElement.innerText = "Men's Clothing"
    } else if (womenIsActive) {
      genderChoiceElement.innerText = "Women's Clothing"
    } else {
      genderChoiceElement.innerText = "Clothing"
    }

    dispatch(filterByGender(gender))
  }

  let categoriesSet = new Set()
  db.products.forEach((product) => {
    if (product.categories) {
      product.categories.forEach((category) => {
        categoriesSet.add(category)
      })
    }
  })

  let uniqueCategoriesArray = Array.from(categoriesSet)
  console.log(uniqueCategoriesArray)

  return (
    <div id="filter">
      <div className="main-header">
        <h4>Filter</h4>
        <i
          className="fa-solid fa-sliders"
          onClick={() => {
            handleFilterCollapse()
          }}
        ></i>
      </div>
      <ul className="tops">
        <li
          className="men-clothing"
          onClick={(e) => handleFilterByGender(e, "Men")}
        >
          Men <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li
          className="women-clothing"
          onClick={(e) => handleFilterByGender(e, "Women")}
        >
          Women <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
      <ul className="tops">
        {uniqueCategoriesArray.map((category, index) => (
          <li key={index} onClick={(e) => handleFilterByCategory(e, category)}>
            {category} <i className="fa-solid fa-chevron-right"></i>
          </li>
        ))}
      </ul>
      <div onClick={collapse} className="header">
        <h4>Price</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="range-input">
        <div className="min">
          <input
            type="range"
            value={minValue}
            min={0}
            max={1100}
            onChange={(e) => {
              handleMinChange(e)
            }}
          />
          <input
            className="number-input"
            type="number"
            value={minValue}
            min={0}
            max={1100}
            onChange={(e) => {
              handleMinChange(e)
            }}
          />
        </div>
        <div className="max">
          <input
            type="range"
            value={maxValue}
            min={0}
            max={1100}
            onChange={(e) => {
              handleMaxChange(e)
            }}
          />
          <input
            className="number-input"
            type="number"
            value={maxValue}
            min={0}
            max={1100}
            onChange={(e) => {
              handleMaxChange(e)
            }}
          />
        </div>
      </div>
      <div onClick={collapse} className="header">
        <h4>Colors</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="colors-collapse">
        <ul className="color-choices">
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={purple} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>purple</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={black} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>black</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={red} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>red</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={orange} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>orange</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={navy} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>navy</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={white} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>white</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={broom} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>broom</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={green} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>green</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={yellow} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>yellow</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={grey} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>grey</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={pink} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>
            <p>pink</p>
          </li>
          <li className="c-choice" onClick={(e) => handleFilterByColor(e)}>
            <div className="c-choice-img">
              <img src={blue} alt="" />
              <i class="fa-regular fa-circle-check hidden"></i>
            </div>

            <p>blue</p>
          </li>
        </ul>
      </div>
      <div onClick={collapse} className="header">
        <h4>Size</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="size-collapse">
        <ul className="sizes">
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            XXS
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            XS
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            S
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            M
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            L
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            XL
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            2XL
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            3XL
          </li>
          <li
            className="size"
            onClick={(e) => {
              handleFilterBySize(e)
            }}
          >
            4XL
          </li>
        </ul>
      </div>
      <div onClick={collapse} className="header">
        <h4>Dress Style</h4> <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="dress-collapse">
        <ul className="dress-style">
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Classic")
            }}
          >
            Classic <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Casual")
            }}
          >
            Casual <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Business")
            }}
          >
            Business <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Sport")
            }}
          >
            Sport <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Elegant")
            }}
          >
            Elegant <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li
            onClick={(e) => {
              handleFilterByStyle(e, "Formal (evening)")
            }}
          >
            Formal (evening) <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter
